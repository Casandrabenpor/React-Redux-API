import React from 'react';
import {
  Container,
  Form,
  FormTitle,
  ButtonSubmit,
} from '../../styles/createStyled/createStyled';
import { useTypedDispatch } from '../../app/store';
import { Link, useNavigate } from 'react-router-dom';
import Phone from '../../models/interface';
import { createPhone } from '../../features/cardApiThunks/cardApiThunks';

export const CreatePhotos = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const handleCreatePhone = (e: any) => {
    e.preventDefault();
    let newPhone = {
      photoUrl: e.target.photo.value,
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
    } as Phone;
    dispatch(createPhone(newPhone));
    navigate('/create');
  };

  return (
    <>
      <Container>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="heartbeat"
          >
            <linearGradient
              id="hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1"
              x1="7.534"
              x2="27.557"
              y1="7.534"
              y2="27.557"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#f44f5a"></stop>
              <stop offset=".443" stop-color="#ee3d4a"></stop>
              <stop offset="1" stop-color="#e52030"></stop>
            </linearGradient>
            <path
              fill="url(#hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1)"
              d="M42.42,12.401c0.774-0.774,0.774-2.028,0-2.802L38.401,5.58c-0.774-0.774-2.028-0.774-2.802,0	L24,17.179L12.401,5.58c-0.774-0.774-2.028-0.774-2.802,0L5.58,9.599c-0.774,0.774-0.774,2.028,0,2.802L17.179,24L5.58,35.599	c-0.774,0.774-0.774,2.028,0,2.802l4.019,4.019c0.774,0.774,2.028,0.774,2.802,0L42.42,12.401z"
            ></path>
            <linearGradient
              id="hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2"
              x1="27.373"
              x2="40.507"
              y1="27.373"
              y2="40.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#a8142e"></stop>
              <stop offset=".179" stop-color="#ba1632"></stop>
              <stop offset=".243" stop-color="#c21734"></stop>
            </linearGradient>
            <path
              fill="url(#hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2)"
              d="M24,30.821L35.599,42.42c0.774,0.774,2.028,0.774,2.802,0l4.019-4.019	c0.774-0.774,0.774-2.028,0-2.802L30.821,24L24,30.821z"
            ></path>
          </svg>
        </Link>
        <FormTitle>NEW CARD </FormTitle>
        <Form onSubmit={handleCreatePhone}>
          <label htmlFor="photo">Photo Url</label>
          <input
            type="text"
            id="photo"
            name="photo"
            defaultValue=""
            placeholder="img"
            required
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue=""
            placeholder="Name"
            required
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            defaultValue=""
            placeholder="Description"
            required
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            defaultValue=""
            placeholder="Price"
            required
          />
          <ButtonSubmit type="submit" value="Create" className="heartbeat">
            Submit
          </ButtonSubmit>
        </Form>
      </Container>
    </>
  );
};