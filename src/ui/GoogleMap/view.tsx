"use client";

import React from "react";
import {
  Marker,
  GoogleMap,
  MarkerClusterer,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useGoogleMap } from "./io";
import { GoogleMapProps } from "./types";
import { Polyline } from "@react-google-maps/api";

const GoogleMapsView = ({
  stops,
  center,
  origin,
  response,
  itinerary,
  setCenter,
  setResponse,
  destination,
  userLocation,
  setStopDetails,
  setStopLocation,
}: GoogleMapProps) => {
  const {
    path,
    options,
    isLoaded,
    handleOnClick,
    containerStyle,
    directionsCallback,
    directionsServiceOptions,
    directionsRendererOptions,
  } = useGoogleMap({
    stops,
    center,
    origin,
    response,
    itinerary,
    setCenter,
    setResponse,
    destination,
    userLocation,
    setStopDetails,
    setStopLocation,
  });

  if (itinerary && isLoaded) {
    const itineraryCenter = {
      lat: Number(itinerary && itinerary[0].lat),
      lng: Number(itinerary && itinerary[0].lng),
    };

    return (
      <GoogleMap
        zoom={11}
        clickableIcons
        center={itineraryCenter}
        mapContainerStyle={containerStyle}
      >
        <Polyline
          options={{
            path: path,
            geodesic: true,
            strokeWeight: 5,
            strokeOpacity: 1.0,
            strokeColor: "#63B3ED",
          }}
        />
        <Marker
          position={{
            lat: Number(itinerary[0].lat),
            lng: Number(itinerary[0].lng),
          }}
          icon={{
            scaledSize: new window.google.maps.Size(30, 30),
            url: "https://cdn-icons-png.flaticon.com/512/3944/3944427.png",
          }}
        />
        <Marker
          position={{
            lat: Number(itinerary[itinerary.length - 4].lat),
            lng: Number(itinerary[itinerary.length - 4].lng),
          }}
          icon={{
            scaledSize: new window.google.maps.Size(30, 30),
            url: "https://cdn-icons-png.flaticon.com/512/3944/3944427.png",
          }}
        />
      </GoogleMap>
    );
  }

  if (stops && isLoaded) {
    return (
      <>
        <GoogleMap
          zoom={11}
          clickableIcons
          center={center}
          mapContainerStyle={containerStyle}
        >
          <MarkerClusterer options={options}>
            {(clusterer) => (
              <>
                {stops?.map((stop, index) => (
                  <Marker
                    key={index}
                    clusterer={clusterer}
                    position={{
                      lat: Number(stop.latitude),
                      lng: Number(stop.longitude),
                    }}
                    title={`Terminal ${stop.terminal}`}
                    icon={{
                      scaledSize: new window.google.maps.Size(30, 30),
                      url: "https://cdn-icons-png.flaticon.com/512/7491/7491334.png",
                    }}
                    onClick={() =>
                      handleOnClick(stop.linhas, {
                        lat: Number(stop.latitude),
                        lng: Number(stop.longitude),
                      })
                    }
                  />
                ))}
              </>
            )}
          </MarkerClusterer>
          <Marker
            title="Você está aqui"
            position={userLocation}
            icon={{
              scaledSize: new window.google.maps.Size(40, 40),
              url: "https://cdn-icons-png.flaticon.com/512/6378/6378110.png",
            }}
          />
          <DirectionsService
            callback={directionsCallback}
            options={directionsServiceOptions}
          />
          <DirectionsRenderer options={directionsRendererOptions} />
        </GoogleMap>
      </>
    );
  }

  return isLoaded ? <></> : <></>;
};

export default React.memo(GoogleMapsView);
