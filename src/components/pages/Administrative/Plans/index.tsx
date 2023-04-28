import { FC } from 'react';
import { Menu, Input } from '../../../molecules';
import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../../../../utils/routes';
import { Layout } from '../../../templates';
import { useForm } from 'react-hook-form';

export interface LoginSubmitParams {
  cpf: string;
  password: string;
}

const Plans: FC = () => {
  const navigate = useNavigate();

  const MenuItems = () => {
    return (
      <>
        <Menu.MenuItem label="Planos" onClick={() => navigate(routerPaths.home.default)} />
        <Menu.MenuItem label="Administrativo" onClick={() => navigate(routerPaths.administrative.default)} />
      </>
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSubmitParams>();

  const handlePlanSubmit = (params: any) => {
    console.log('params', params);
  };

  return (
    <>
      <Layout title="Planos">
        <form onSubmit={handleSubmit(handlePlanSubmit)}>
          <Input
            type="number"
            label="CPF"
            placeholder="R$ 999,99"
            {...(errors.cpf && {
              status: 'error',
              message: errors.cpf.message,
            })}
            {...register('cpf')}
          />
        </form>
      </Layout>
    </>
  );
};

export default Plans;
