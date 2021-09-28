import axios, { AxiosError } from "axios"
import _ from "lodash"

const config = {
  cors: 'https://cors-anywhere.herokuapp.com/', // <optional> doesn't display the cors error
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdICAydCLg2Q6JDTYW0lT2MMLocI9TKsMx6yks-pR_NBLyFww/formResponse' 
};

export const handleSubmit = (event: React.FormEvent<HTMLFormElement>, values:any, callback:any) => {
  event.preventDefault();
  console.log(values);
  const input = {
      name: { id: 2092238618 },
      email: { id: 1556369182},
      course: { id: 479301265}
    }

    const inputData = {
      name: { value: "a123" },
      email: { value: "a123@a.com"},
      course: { value: "aa123"}
    }
  const inputs = _.merge(input, inputData)

  const formData = new FormData();
  formData.append(`entry.${inputs.name.id}`, values.name)
  formData.append(`entry.${inputs.email.id}`, values.email)
  formData.append(`entry.${inputs.course.id}`, values.course)

  
    axios({
      url: `${config.cors}${config.formUrl}`,
      method: 'post',
      data: formData,
      responseType: 'json'
    })
    .then((response) => {
      callback()
    })
    .catch( (err:Error| AxiosError) => {
      console.log('err', err);
    })
};