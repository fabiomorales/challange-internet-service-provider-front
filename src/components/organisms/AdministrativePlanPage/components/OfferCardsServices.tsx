import { FC, useEffect, useState } from 'react';
import { IListBenefits } from '../../../../services/plans/ListPlansService/interfaces/response';
import { BenefitTypeEnum } from '../../../../utils/constants';
import { Flex, Image, Loading, Typograph } from '../../../atoms';
import { Input } from '../../../molecules';
import { IServices } from '../interfaces';
import * as S from '../styles';

const Services: FC<Partial<IServices>> = ({
  services,
  listBenefitRequesting,
  variant = 'default',
  listBenefit,
  listBenefitsSerializer,
}) => {
  const [listBenefitsIncluded, setListBenefitsIncluded] = useState<Array<IListBenefits>>([] as Array<IListBenefits>);
  const [listBenefitsToInclude, setListBenefitsToInclude] = useState<Array<IListBenefits>>([] as Array<IListBenefits>);

  const mountListBenefits = (services: Array<IListBenefits>) => {
    const appListSerialized = services.filter((service) => service.benefitType === BenefitTypeEnum.SERVICE);
    const listBenefitSerialized = listBenefit?.filter((benefit) => benefit.benefitType === BenefitTypeEnum.SERVICE);

    const benefitsNotIncluded = listBenefitSerialized?.filter((existingBenefit) => {
      return !appListSerialized?.some((benefit) => {
        return benefit.id === existingBenefit.id;
      });
    });

    setListBenefitsIncluded(appListSerialized);
    setListBenefitsToInclude(benefitsNotIncluded ?? []);
  };

  useEffect(() => {
    if (variant !== 'including' && services?.length) {
      mountListBenefits(services);
    }
    if (variant === 'including') {
      mountListBenefits([]);
    }
  }, [listBenefit, services]);

  if (listBenefitRequesting) {
    return (
      <Flex flex={1} width={'100%'} centered mb={30} mt={30}>
        <Loading>
          <Loading.Dot />
        </Loading>
      </Flex>
    );
  }

  return (
    <Flex justifyContent={variant === 'editing' ? 'space-between' : 'center'} gap={30} width={'100%'}>
      {variant !== 'including' && (
        <Flex
          gap={5}
          as={'ul'}
          flexDirection="column"
          justifyContent={variant === 'editing' ? 'flex-start' : 'center'}
          alignItems={variant === 'editing' ? 'flex-start' : 'center'}
        >
          {variant === 'editing' && (
            <>
              <Typograph type="headingsH5SemiBold" color="primary600">
                Serviços inclusos:
              </Typograph>
              <Typograph type="smallLabelTextSemiBold" color="quartenary500">
                *Check para remover
              </Typograph>
            </>
          )}
          {listBenefitsIncluded.length ? (
            listBenefitsIncluded?.map((service, key) => (
              <S.LiServices as={'li'} key={key} variant={variant}>
                <Flex
                  gap={5}
                  as={'span'}
                  justifyContent={variant === 'editing' ? 'flex-start' : 'center'}
                  alignItems={variant === 'editing' ? 'flex-start' : 'center'}
                  width={'100%'}
                >
                  <Image src={`../src/assets/images/${service.img}.svg`} alt={service.description} size={20} />
                  <Typograph type="bodyTextRegular">{service.description}</Typograph>
                </Flex>

                {variant === 'editing' && (
                  <Input
                    type="checkbox"
                    label=""
                    onChange={(e) =>
                      listBenefitsSerializer &&
                      listBenefitsSerializer({
                        checked: e.target.checked,
                        benefitId: service.id,
                        variant: 'exclude',
                      })
                    }
                  />
                )}
              </S.LiServices>
            ))
          ) : variant === 'editing' ? (
            <Typograph type="headingsH5Regular" color="secondary400" m="auto">
              Não existem serviços inclusos
            </Typograph>
          ) : null}
        </Flex>
      )}

      {variant !== 'default' && (
        <Flex gap={5} as={'ul'} flexDirection="column">
          <Typograph type="headingsH5SemiBold" color="primary600">
            Serviços para incluir:
          </Typograph>
          <Typograph type="smallLabelTextSemiBold" color="tertiary500">
            *Check para incluir
          </Typograph>
          {listBenefitsToInclude.length ? (
            listBenefitsToInclude?.map((service, key) => (
              <S.LiServices as={'li'} key={key} variant={variant}>
                <Flex gap={5} as={'span'} justifyContent="flex-start" alignItems="flex-start" width={'100%'}>
                  <Image src={`../src/assets/images/${service.img}.svg`} alt={service.description} size={20} />
                  <Typograph type="bodyTextRegular">{service.description}</Typograph>
                </Flex>

                <Input
                  type="checkbox"
                  label=""
                  onChange={(e) =>
                    listBenefitsSerializer &&
                    listBenefitsSerializer({
                      checked: e.target.checked,
                      benefitId: service.id,
                      variant: 'include',
                    })
                  }
                />
              </S.LiServices>
            ))
          ) : (
            <Typograph type="headingsH5Regular" color="secondary400" m="auto">
              Não existem serviços para incluir
            </Typograph>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Services;
