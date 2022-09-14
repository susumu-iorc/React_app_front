/* 汎用フォームのコンポーネント
/* <SubmitButton
/*        onClickTo={ ボタン実行時のイベント }
/*        txt=" ボタンの文字 "
/*        />
/*
/**/
import * as React from 'react'
import {Input,
        FormControl,
        FormLabel,
        FormErrorMessage,
        FormHelperText} from '@chakra-ui/react'

export const TextForm = (props) => {
	return(
		<>  
      <FormControl>
        <FormLabel>{props.label}</FormLabel>
        <Input {...props} htmlSize={4} 
          size="lg" backgroundColor={"gray.300"}
          outlineColor={"blue.300"} outlineOffset={-1}
          />
      </FormControl>
      <br />
    </>
	)
};