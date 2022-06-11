import type { NextPage } from 'next'
import { useCallback } from 'react'
import {
  Button,
  useToast,
  chakra,
  Input,
  HStack,
  Heading,
} from '@chakra-ui/react'
import { Template } from '@/components/templates'
import { useObjects } from '@/services'
import { useSeo } from '@/lib/seo'
import { UserList } from '@/components/parts/UserList'
import { SubmitHandler, useForm } from 'react-hook-form'
import { addObjects, deleteObjects } from '@/services/objects'
import { Canvas } from '@react-three/fiber'
import { Box } from '@/components/3dObjects/Box'

const Index: NextPage = () => {
  const { DefaultSeo, NextSeo } = useSeo({
    title: 'Index',
    description: 'Indexの説明',
  })

  const { data, error, mutate } = useObjects()
  const onMutate = useCallback(() => mutate(data), [data, mutate])

  const toast = useToast()

  const { register, handleSubmit } = useForm<{
    id: string
    name: string
    scale_x: number
    scale_y: number
    scale_z: number
    pos_x: number
    pos_y: number
    pos_z: number
  }>()
  const onSubmit: SubmitHandler<{
    id: string
    name: string
    scale_x: number
    scale_y: number
    scale_z: number
    pos_x: number
    pos_y: number
    pos_z: number
  }> = useCallback(
    (submitData) => {
      addObjects(submitData).then(() => {
        onMutate()
      })
    },
    [onMutate],
  )

  // TODO: 削除のたびにGETリクエストが走るのは良くないかも
  const handleDelete = useCallback(
    (user_id: number) => {
      deleteObjects({ id: user_id }).then(() => {
        onMutate()
      })
    },
    [onMutate],
  )

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />
      <chakra.div
        w='full'
        h={350}
        border='1px solid #3f444e'
        borderRadius={8}
        mb={10}
      >
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {data ? (
            <>
              {data.map(
                ({ name, scale_x, scale_y, scale_z, pos_x, pos_y, pos_z }) => {
                  return (
                    <Box
                      key={name}
                      position={[pos_x, pos_y, pos_z]}
                      scale={[scale_x, scale_y, scale_z]}
                    />
                  )
                },
              )}
            </>
          ) : null}
        </Canvas>
      </chakra.div>

      <Heading as='h2' fontSize={20} mb={10}>
        3D Objects into Database App.
      </Heading>
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <HStack>
          <Input w={100} {...register('name')} placeholder='name' />
          <Input w={100} {...register('scale_x')} placeholder='scale_x' />
          <Input w={100} {...register('scale_y')} placeholder='scale_y' />
          <Input w={100} {...register('scale_z')} placeholder='scale_z' />
          <Input w={100} {...register('pos_x')} placeholder='pos_x' />
          <Input w={100} {...register('pos_y')} placeholder='pos_y' />
          <Input w={100} {...register('pos_z')} placeholder='pos_z' />
          <Button w={100} h='40px' py={0} px='10px' fontSize={14} type='submit'>
            Add Objects
          </Button>
        </HStack>
      </chakra.form>
      {error &&
        toast({
          title: 'Error!',
          description: '通信エラーが発生しました',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })}
    </Template>
  )
}

export default Index
