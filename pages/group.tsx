import { Button, Group } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { Layout } from '../components/Layout'

const GroupDemo = () => {
  return (
    <Layout title='Group'>
      <Group grow my="md">
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      <Group direction="column" position="center" my="md">
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      <Group my="md" align="">
        <Button className="h-10" color="indigo">1</Button>
        <Button className="h-20" color="teal">2</Button>
        <Button className="h-32" color="orange">3</Button>
      </Group>
      <Link href="/">
        <Button>戻る</Button>
      </Link>
    </Layout>
  )
}

export default GroupDemo