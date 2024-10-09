import  { useState } from 'react';
import { Badge, CloseButton, InputLabel } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';

function TagInputInsideTextInput() {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState([]);
  const theme = useMantineTheme();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()]);
      setInputValue(''); 
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };
  
  return (
      <div>
        <InputLabel size='md'>Video Tags</InputLabel>
      <div
        style={{
          border: `1px solid ${theme.colors.gray[4]}`,
          borderRadius: "10px",
          padding: '5px 10px',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          minHeight: '40px',
          cursor: 'text',
        }}
        onClick={() => document.getElementById('tag-input').focus()} 
      >
        {tags.map((tag, index) => (
          <Badge
            key={index}
            rightSection={
              <CloseButton
                size="xs"
                color='#ffff'
                onClick={() => removeTag(index)}
                style={{ marginLeft: '5px' , color:"ffff"}}
              />
            }
          >
            {tag}
          </Badge>
        ))}
        <input
          id="tag-input"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            border: 'none',
            outline: 'none',
            flex: 1, 
            minWidth: '120px', 
          }}
          label="Video Tags"
          placeholder="Enter your desired category"
        />
      </div>
    </div>
  );
}

export default TagInputInsideTextInput;
