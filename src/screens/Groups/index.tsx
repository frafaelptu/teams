import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Header } from '@components/Header'
import { Container } from './styles'
import { GroupCard } from '@components/GroupCard'
import { FlatList } from 'react-native'
import { Listempty } from '@components/Listempty'
import { Button } from '@components/Button'
import { Highlight } from '@components/Highlight'
import { groupsGetAll } from '@storage/group/groupsGetAll'

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []),
  )

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <Listempty message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  )
}
