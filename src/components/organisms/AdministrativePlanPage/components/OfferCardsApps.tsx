import { FC, useEffect, useState } from 'react';
import { IListBenefits } from '../../../../services/plans/ListPlansService/interfaces/response';
import { BenefitTypeEnum } from '../../../../utils/constants';
import { Flex, Image, Loading, Typograph } from '../../../atoms';
import { Input } from '../../../molecules';
import { IApps } from '../interfaces';
import * as S from '../styles';

const Apps: FC<Partial<IApps>> = ({
  apps,
  listBenefitRequesting,
  listBenefit,
  variant = 'default',
  listBenefitsSerializer,
}) => {
  const [listBenefitsIncluded, setListBenefitsIncluded] = useState<Array<IListBenefits>>([] as Array<IListBenefits>);
  const [listBenefitsToInclude, setListBenefitsToInclude] = useState<Array<IListBenefits>>([] as Array<IListBenefits>);

  const mountListBenefits = (apps: Array<IListBenefits>) => {
    const appListSerialized = apps.filter((app) => app.benefitType === BenefitTypeEnum.APP);
    const listBenefitSerialized = listBenefit?.filter((benefit) => benefit.benefitType === BenefitTypeEnum.APP);

    const benefitsNotIncluded = listBenefitSerialized?.filter((existingBenefit) => {
      return !appListSerialized?.some((benefit) => {
        return benefit.id === existingBenefit.id;
      });
    });

    setListBenefitsIncluded(appListSerialized);
    setListBenefitsToInclude(benefitsNotIncluded ?? []);
  };

  useEffect(() => {
    if (variant !== 'including' && apps?.length) {
      mountListBenefits(apps);
    }
    if (variant === 'including') {
      mountListBenefits([]);
    }
  }, [listBenefit, apps]);

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
                Apps inclusos:
              </Typograph>
              <Typograph type="smallLabelTextSemiBold" color="quartenary500">
                *Check para remover
              </Typograph>
            </>
          )}
          {variant === 'default' && listBenefitsIncluded.length ? (
            <Flex gap={9} maxWidth={'100%'} flexWrap="wrap" centered>
              {listBenefitsIncluded?.map((app, key) => (
                <S.ImageCard as={'li'} key={key}>
                  <Image src={`../src/assets/images/${app.img}.png`} alt={app.description} size={50} />
                </S.ImageCard>
              ))}
            </Flex>
          ) : null}
          {variant === 'editing' && listBenefitsIncluded.length ? (
            listBenefitsIncluded?.map((app, key) => (
              <S.LiApps as={'li'} key={key} variant={variant}>
                <Flex gap={5} as={'span'} justifyContent="flex-start" alignItems="center" width={'100%'} mb={9}>
                  <S.ImageCard as={'span'}>
                    <Image src={`../src/assets/images/${app.img}.png`} alt={app.description} size={50} />
                  </S.ImageCard>
                  {variant === 'editing' && <Typograph type="bodyTextRegular">{app.description}</Typograph>}
                </Flex>

                {variant === 'editing' && (
                  <Input
                    type="checkbox"
                    label=""
                    onChange={(e) =>
                      listBenefitsSerializer &&
                      listBenefitsSerializer({
                        checked: e.target.checked,
                        benefitId: app.id,
                        variant: 'exclude',
                      })
                    }
                  />
                )}
              </S.LiApps>
            ))
          ) : variant === 'editing' ? (
            <Typograph type="headingsH5Regular" color="secondary400" m="auto">
              Não existem apps inclusos
            </Typograph>
          ) : null}
        </Flex>
      )}

      {variant !== 'default' && (
        <Flex gap={5} as={'ul'} flexDirection="column">
          <Typograph type="headingsH5SemiBold" color="primary600">
            Apps para incluir:
          </Typograph>
          <Typograph type="smallLabelTextSemiBold" color="tertiary500">
            *Check para incluir
          </Typograph>
          {listBenefitsToInclude.length ? (
            listBenefitsToInclude?.map((app, key) => (
              <S.LiApps as={'li'} key={key} variant={variant}>
                <Flex gap={5} as={'span'} justifyContent="flex-start" alignItems="center" width={'100%'} mb={9}>
                  <S.ImageCard as={'span'}>
                    <Image src={`../src/assets/images/${app.img}.png`} alt={app.description} size={50} />
                  </S.ImageCard>
                  <Typograph type="bodyTextRegular">{app.description}</Typograph>
                </Flex>

                <Input
                  type="checkbox"
                  label=""
                  onChange={(e) =>
                    listBenefitsSerializer &&
                    listBenefitsSerializer({ checked: e.target.checked, benefitId: app.id, variant: 'include' })
                  }
                />
              </S.LiApps>
            ))
          ) : (
            <Typograph type="headingsH5Regular" color="secondary400" m="auto">
              Não existem apps para incluir
            </Typograph>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Apps;
