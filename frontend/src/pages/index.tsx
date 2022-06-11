import type { NextPage } from 'next'
import { useCallback } from 'react'
import { Button, useToast, chakra, Input } from '@chakra-ui/react'
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
      <chakra.div w='full' h={350}>
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

        <chakra.form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('name')} />
          <Input {...register('scale_x')} />
          <Input {...register('scale_y')} />
          <Input {...register('scale_z')} />
          <Input {...register('pos_x')} />
          <Input {...register('pos_y')} />
          <Input {...register('pos_z')} />
          <Button type='submit'>Add Objects</Button>
        </chakra.form>
        {error &&
          toast({
            title: 'Error!',
            description: '通信エラーが発生しました',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })}
        <Button variant='contained' onClick={onMutate}>
          update
        </Button>
      </chakra.div>
    </Template>
  )
}

export default Index
