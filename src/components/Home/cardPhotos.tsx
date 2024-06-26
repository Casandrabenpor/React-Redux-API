import React, { useEffect, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../app/store';
import Phone from '../../models/interface';
import {
  deletePhone,
  loadPhones,
} from '../../features/cardApiThunks/cardApiThunks';
import { ToastContainer } from 'react-toastify';
import {
  Card,
  Gallery,
  Subtitle,
  TextGallery,
  TextPrice,
  TitleGallery,
} from '../../styles/cardsStyled/cardsStyled';
import { Link } from 'react-router-dom';
import {
  getAllPhones,
  getPhoneStatus,
} from '../../features/cardApiThunks/cardSlice';
// import { CircleLoader } from 'react-spinners';

export const CardPhotos = () => {
  const dispatch = useTypedDispatch();
  const phoneStatus = useTypedSelector(getPhoneStatus);
  const phonesData = useTypedSelector(getAllPhones) as Phone[];

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Api
    if (phoneStatus === 'idle') {
      dispatch(loadPhones());
    } else if (phoneStatus === 'loading') {
      //animation loading
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [phoneStatus, dispatch]);

  //Delete phone
  const handleDeletePhone = (phoneId: number | undefined) => {
    // event.preventDefault();
    dispatch(deletePhone(phoneId));
  };

  return (
    <div>
      <Subtitle>CARDS</Subtitle>
      {/* {isLoading && <CircleLoader color="rgb(243, 100, 18)" size={1000} />} */}
      <Gallery>
        {phonesData.map((phone: Phone) => (
          <Card key={phone.id}>
            <Link to={`/details/${phone.id}`}>
              <img src={phone.photoUrl} alt={phone.name} />
            </Link>
            <TitleGallery>{phone.name}</TitleGallery>
            <TextGallery>
              {' '}
              <div
                dangerouslySetInnerHTML={{ __html: phone.description }}
              ></div>
            </TextGallery>
            <TextPrice>{phone.price}</TextPrice>
            <h2 onClick={() => handleDeletePhone(phone.id)}>🗑 </h2>
          </Card>
        ))}
      </Gallery>
    </div>
  );
};
