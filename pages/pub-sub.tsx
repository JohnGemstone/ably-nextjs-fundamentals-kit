import * as Ably from 'ably/promises';
import { assertConfiguration, useChannel } from '@ably-labs/react-hooks';

import Layout from '../components/layout'
import Logger, { LogEntry } from '../components/logger'
import homeStyles from '../styles/Home.module.css'
import styles from '../styles/PubSub.module.css'
import { MouseEventHandler, MouseEvent, useEffect, useState, useCallback } from 'react'

export default function PubSub() {
  const [logs, setLogs] = useState<Array<LogEntry>>([])
  const [messageText, setMessageText] = useState<string>('A message')

  const [channel, ably] = useChannel('status-updates', (message: Ably.Types.Message) => {
    setLogs(prev => [...prev, new LogEntry(`✉️ event name: ${message.name} text: ${message.data.text}`)])
  });

  const publicFromClientHandler: MouseEventHandler = (_event: MouseEvent<HTMLButtonElement>) => {
    channel.publish('update-from-client', { text: `${messageText} @ ${new Date().toISOString()}` })
  }

  const publicFromServerHandler: MouseEventHandler = (_event: MouseEvent<HTMLButtonElement>) => {
    fetch('/api/pub-sub/publish', {
      'method': 'POST',
      'headers': {
        'content-type': 'application/json',
      },
      'body': JSON.stringify({ text: `${messageText} @ ${new Date().toISOString()}` })
    })
  }

  return (
    <Layout
      pageTitle="Ably PubSub with Next.js"
      metaDescription="Ably PubSub with Next.js"
    >
      <p className={homeStyles.description}>
        Publish messages on channels and subscribe to channels to receive messages. Click the <b>Public from the client</b> to publish a message on a channel from the web browser client. Click the <b>Public from the server</b> to publish a message from a serverless function.
      </p>

      <section className={styles.publish}>
        <h3>Publish</h3>
        <div>
          <label htmlFor="message">Message text</label>
          <input type="text" placeholder="message to publish" value={messageText} onChange={e => setMessageText(e.target.value)} />
        </div>
        <div>
          <button onClick={publicFromClientHandler}>Publish from client</button>
          <button onClick={publicFromServerHandler}>Publish from server</button>
        </div>
      </section>

      <section>
        <h3>Subscribe</h3>
        <Logger logEntries={logs} />
      </section>
    </Layout>
  )
}
