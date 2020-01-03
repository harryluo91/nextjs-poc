// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { processLogin } from '../store/auth/authActions';
import { LoginSchema } from '../utils/formUtils';
import styles from '../styles/pages/login.scss';

const Login = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit, errors } = useForm({
		validationSchema: LoginSchema,
	});

	const onSubmit = data => {
		dispatch(processLogin(data));
	};

	return (
		<div className={styles.login}>
			<div className={styles.title}>Login Form</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.formFieldContainer}>
					<input name="username" ref={register} />
					{errors.username && (
						<span className={styles.errorMessage}>{errors.username.message}</span>
					)}
				</div>
				<div className={styles.formFieldContainer}>
					<input type="password" name="password" ref={register} />
					{errors.password && (
						<span className={styles.errorMessage}>{errors.password.message}</span>
					)}
				</div>

				<input type="submit" />
			</form>
		</div>
	);
};

export default Login;
