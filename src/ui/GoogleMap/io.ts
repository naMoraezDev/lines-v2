import { GoogleMapProps } from "./types";
import { Line } from "@/service/lines/types";
import React, { useEffect, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

export const useGoogleMap = ({
  origin,
  response,
  itinerary,
  setCenter,
  setResponse,
  destination,
  setStopDetails,
  setStopLocation,
}: GoogleMapProps) => {
  const [path, setPath] = useState<any>([]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCNO-HLkjdLj95mGXQLKNvzQR8hf0DExjU",
    language: "pt-BR",
  });

  useEffect(() => {
    itinerary &&
      itinerary.forEach((line, index) => {
        setTimeout(() => {
          setPath((old: any) => [
            ...old,
            { lat: Number(line.lat), lng: Number(line.lng) },
          ]);
        }, index * 5);
      });
  }, [itinerary]);

  const handleOnClick = (stopLines: Line[], location: any) => {
    if (setStopDetails && setStopLocation) {
      setStopDetails(stopLines);
      setStopLocation(location);
      if (setCenter) {
        setCenter(location);
      }
    }
  };

  const containerStyle = {
    width: "100%",
    height: "810px",
  };

  const options = {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  };

  const directionsServiceOptions =
    // @ts-ignore
    React.useMemo<google.maps.DirectionsRequest>(() => {
      return {
        origin,
        destination,
        travelMode: "WALKING",
      };
    }, [origin, destination]);

  const directionsCallback = React.useCallback(
    (res: any) => {
      if (res !== null && res.status === "OK") {
        setResponse && setResponse(res);
      } else {
        console.log(res);
      }
    },
    [setResponse]
  );

  const directionsRendererOptions = React.useMemo<any>(() => {
    return {
      directions: response,
    };
  }, [response]);

  return {
    path,
    options,
    isLoaded,
    handleOnClick,
    containerStyle,
    directionsCallback,
    directionsServiceOptions,
    directionsRendererOptions,
  };
};
