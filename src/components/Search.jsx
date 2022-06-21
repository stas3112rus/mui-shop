import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField 
        type='search' 
        value={value} 
        onChange={onChange} 
        sx={{mt:"20px", mb:"20px"}}
        id="search-basic" 
        label="Текст запроса" 
        variant="outlined"
        fullWidth
        />;
};

export default Search;