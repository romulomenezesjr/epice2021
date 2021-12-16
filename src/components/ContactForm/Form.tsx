import {
	Box, Container, SimpleGrid, Stack, Heading,
	AvatarGroup, Text, Avatar, Button, AvatarBadge,
	useColorModeValue, Img, useMediaQuery, chakra, Flex,
} from '@chakra-ui/react';
import { AiOutlineSend, AiOutlineUserAdd, AiOutlineMail } from 'react-icons/ai'
import { IoMdSchool } from 'react-icons/io'
import { handleSubmit } from "../../common/utils/googleFormsSubmit"
import Input from '../../common/Input';
import { palestrantes } from '../../content/palestrantes';
import { ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { Span } from "./styles";
import validate from "../../common/utils/validationRules";

export default function Form() {
	const [isLargerThan1280] = useMediaQuery('(min-width: 400px)')

	const { values, errors, handleChange } = useForm(
		validate
	) as any;

	const ValidationType = ({ type }: ValidationTypeProps) => {
		const ErrorMessage = errors[type];
		return (
			<Zoom direction="left">
				<Span erros={errors[type]}>{ErrorMessage}</Span>
			</Zoom>
		);
	};
	return (
		<Box id="contact" as="section">
			<Container
				as={SimpleGrid}
				maxW={'7xl'}
				columns={{ base: 1, md: 2 }}
				spacing={{ base: 10, lg: 32 }}
				py={{ base: 10, sm: 20, lg: 32 }}
			>
				<Stack spacing={5}>
					<Slide direction="left">
						<Heading
							lineHeight={1.1}
							fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
							bgGradient='linear(to-l, #7928CA, #FF0080)'
							bgClip='text'
							fontWeight='extrabold'
						>
							Faça sua inscrição
						</Heading>
						<Text>Encontro Picuiense de Computação e Eletrônica do IFPB</Text>
						<Flex
							flex={1}
							justify={'center'}
							align={'center'}
							position={'relative'}
							w={'full'}>
							<Img
								src="img/svg/undraw_collaboration_re_vyau.svg"
								display={isLargerThan1280 ? "flex" : "none"}
								h="250px"
								textAlign={'center'}
							/>
						</Flex>
						<Stack direction={'row'} spacing='1rem' align={'center'}>
							<Fade>
								<AvatarGroup max={5}>
									{palestrantes.map((avatar) => (
										<Avatar
											key={avatar.name}
											name={avatar.name}
											src={avatar.avatar}
											size="lg"
											position={'relative'}
											borderColor="purple.500"
											borderWidth={4}
										>
											<AvatarBadge boxSize='22px' bg='green.500' />
										</Avatar>
									))}
								</AvatarGroup>
							</Fade>
						</Stack>
					</Slide>
				</Stack>
				<Slide direction="right">
					<Stack
						bg={useColorModeValue('#d0d8dd', '#000')}
						rounded={'xl'}
						p={{ base: 4, sm: 6, md: 8 }}
						spacing={{ base: 8 }}
						width="94%"
						maxWidth="700px"
					>
						<chakra.form method='post' onSubmit={e => handleSubmit(e, values, alert("Inscrição realizada com sucesso"))}>
							{/* <FormGroup
								autoComplete="off"
								onSubmit={e => handleSubmit(e, values, alert("Inscrição realizada com sucesso"))}
							> */}
							<Heading color={useColorModeValue("#18216d", "white")}>Inscrição</Heading>
							<Box as="form" mt={10}>
								<Stack spacing={4}>
									<Box>
										<Input
											placeholder="Curso"
											txt="Nome completo"
											name="name"
											children={<AiOutlineUserAdd />}
											type="text"
											value={values.name || ""}
											onChange={handleChange}
										/>
										<ValidationType type="name" />
									</Box>
									<Box>
										<Input
											placeholder="@Email"
											txt="Coloque seu Email"
											name="email"
											children={<AiOutlineMail />}
											type="email"
											value={values.email || ""}
											onChange={handleChange}
										/>
										<ValidationType type="email" />
									</Box>
									<Box>
										<Input
											placeholder="Curso"
											txt="Nome do curso"
											name="course"
											children={<IoMdSchool />}
											value={values.message || ""}
											onChange={handleChange}
										/>
										<ValidationType type="course" />
									</Box>
									<Button
										type="submit"
										width="full"
										mt={4}
										outline="none"
										_hover={{ backgroundColor: 'purple.600' }}
										backgroundColor="purple.500"
										leftIcon={<AiOutlineSend />}
									>
										Realizar inscrição
									</Button>
								</Stack>
							</Box>
							{/* </FormGroup> */}
						</chakra.form>
					</Stack>
					<div className='icon-scroll' />
				</Slide>
			</Container>
		</Box>
	)
}