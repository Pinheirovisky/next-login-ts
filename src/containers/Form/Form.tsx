import React from 'react';

// Components
import { Input } from '../../components';
import { FormValues } from '../../screens/Login/Login';

// Helpers
import { polishingString } from '../../helpers/strings';

// Styles
import Wrapper from './Form.styles';
import { FormikErrors, FormikTouched } from 'formik';

type Props = {
  values: FormValues;
  setFieldValue: (label: string, value: string) => void;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
};

const Form: React.FC<Props> = ({
  values,
  setFieldValue,
  errors,
  touched,
}: Props) => {
  return (
    <Wrapper className="form" action="post">
      <Input
        type="email"
        name="email"
        id="email"
        value={values.email}
        label="E-MAIL"
        placeholder="user.name@mail.com"
        onBlur={(e) => setFieldValue('email', e.target.value.toLowerCase())}
        error={errors.email && touched.email ? true : false}
        msg={errors.email && touched.email ? errors.email : null}
        onChange={(e) =>
          setFieldValue('email', polishingString(e.target.value))
        }
      />
      <Input
        type="password"
        name="password"
        id="password"
        value={values.password}
        onChange={(e) =>
          setFieldValue('password', polishingString(e.target.value))
        }
        error={errors.password && touched.password ? true : false}
        msg={errors.password && touched.password ? errors.password : null}
        label="SENHA"
        placeholder="******"
      />
    </Wrapper>
  );
};

export default Form;
