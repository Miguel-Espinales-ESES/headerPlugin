import Header from './components/header'
import { Box, Button, Select } from "@mantine/core";
// 
import styles from './globlaStyles.module.scss'

const App = () => {
  return (
    <Box className={styles.mainContainerHeaderPlugin}>
      <p className="bg-green-800 text-white p-10 rounded-lg">
        Application front-end Main React component
      </p>
      <Button variant="filled" color="rgba(235, 16, 16, 1)">
        Button
      </Button>
      <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={["React", "Angular", "Vue", "Svelte"]}
      />
      <Header />
    </Box>
  );
};

export default App;
