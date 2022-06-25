import { Button, Group } from '@mantine/core'
import React from 'react'
import { Layout } from '../components/Layout'
import { BrandGithub, ThreeDCubeSphere } from 'tabler-icons-react';
import Link from 'next/link';

const ButtonDemo = () => {
  return (
    <Layout title='Button'>
      <Group direction="column" position="center">
        <Button 
        variant="outline" 
        color="red" radius="lg" 
        size="md" 
        classNames={{
          leftIcon: 'text-pink-500 h-6 w-6',
          rightIcon: 'text-blue-500 h-6 w-6',
        }}
        leftIcon={<BrandGithub/>}
        rightIcon={<ThreeDCubeSphere/>}>
          ボタン
        </Button>
        <Link href="/">
          <Button mt="md">
            Click
          </Button>
        </Link>
      </Group>
    </Layout>
  )
}

export default ButtonDemo