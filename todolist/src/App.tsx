import { Container, AppBar, Toolbar, Typography, List, ListItem, ListItemText, ToggleButton } from '@mui/material';
import { useState } from 'react';
import AddItem from './components/AddItem';
import './App.css'

export type Item = {
  content: string;
  checkTodo: boolean;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([item, ...items]);
  }
  
  const toggleTodo = (index: number) => {
  setItems(items.map((item, i) => 
    i === index ? { ...item, checkTodo: !item.checkTodo } : item
  ));
};

  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>
              Todo List
            </Typography>
          </Toolbar>
        </AppBar>
        <AddItem addItem={addItem}/>
        <List>
          {
            items.map((item, index) => 
              <ListItem key={index} divider>
                <ListItemText
                  primary={item.content}
                  secondary={
                    <>
                      <Typography display='block'>
                        <ToggleButton
                          value="check"
                          selected={item.checkTodo}
                          onChange={() => toggleTodo(index)}
                        >
                          {item.checkTodo ? "✅ 완료" : "⏳ 미완료"}
                        </ToggleButton>
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            )
          }
        </List>
      </Container>
    </>
  )
}

export default App