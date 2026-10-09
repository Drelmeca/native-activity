import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';

export default function App() {
  const [page, setPage] = useState('users');
  const [users, setUsers] = useState([{id:1, name:'Admin', role:'Admin'}, {id:2, name:'User1', role:'User'}]);
  const [files, setFiles] = useState([{id:1, name:'document.txt', size:'12KB'}, {id:2, name:'image.png', size:'2MB'}]);
  const [name, setName] = useState('');

  const addUser = () => {
    if(name.trim() === '') return;
    setUsers([...users, {id: Date.now(), name, role:'User'}]);
    setName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>OS Manager - Lesson 1 to 6</Text>
      
      <View style={styles.nav}>
        <TouchableOpacity style={[styles.navBtn, page==='users' && styles.active]} onPress={()=>setPage('users')}><Text style={styles.navText}>L1 Users</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.navBtn, page==='files' && styles.active]} onPress={()=>setPage('files')}><Text style={styles.navText}>L2 Files</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.navBtn, page==='process' && styles.active]} onPress={()=>setPage('process')}><Text style={styles.navText}>L3 Process</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.navBtn, page==='memory' && styles.active]} onPress={()=>setPage('memory')}><Text style={styles.navText}>L4 Memory</Text></TouchableOpacity>
      </View>

      <ScrollView style={styles.page}>
        {page === 'users' && (
          <View>
            <Text style={styles.pageTitle}>Lesson 1: User Management</Text>
            <View style={{flexDirection:'row', marginBottom:15}}>
              <TextInput style={styles.input} placeholder="New user name" value={name} onChangeText={setName} />
              <TouchableOpacity style={styles.addBtn} onPress={addUser}><Text style={{color:'white'}}>Add</Text></TouchableOpacity>
            </View>
            {users.map(u => (
              <View key={u.id} style={styles.rowItem}><Text>{u.name}</Text><Text style={styles.badge}>{u.role}</Text></View>
            ))}
          </View>
        )}
        {page === 'files' && (
          <View>
            <Text style={styles.pageTitle}>Lesson 2: File Management</Text>
            {files.map(f => (
              <View key={f.id} style={styles.rowItem}><Text>{f.name}</Text><Text>{f.size}</Text></View>
            ))}
          </View>
        )}
        {page === 'process' && (
          <View>
            <Text style={styles.pageTitle}>Lesson 3 & 4: Process & Scheduling</Text>
            <Text>PID: 101 - Running ✅</Text>
            <Text>PID: 102 - Waiting ⏳</Text>
            <Text>PID: 103 - Ready</Text>
          </View>
        )}
        {page === 'memory' && (
          <View>
            <Text style={styles.pageTitle}>Lesson 5 & 6: Memory Management</Text>
            <Text>Total RAM: 8GB</Text>
            <Text>Used: 4.2GB (52%)</Text>
            <Text>Free: 3.8GB</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4', paddingTop: 50 },
  header: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  nav: { flexDirection: 'row', backgroundColor: '#222', padding: 10, gap: 8, flexWrap:'wrap' },
  navBtn: { backgroundColor: '#444', padding: 8, borderRadius: 6 },
  active: { backgroundColor: '#007bff' },
  navText: { color: 'white' },
  page: { backgroundColor: 'white', margin: 15, padding: 20, borderRadius: 10 },
  pageTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, flex: 1, borderRadius: 6, backgroundColor:'white' },
  addBtn: { backgroundColor: '#007bff', padding: 12, borderRadius: 6, marginLeft: 8 },
  rowItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  badge: { backgroundColor: '#eee', paddingHorizontal: 8, borderRadius: 4 }
});