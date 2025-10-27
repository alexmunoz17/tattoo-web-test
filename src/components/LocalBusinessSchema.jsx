function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "name": "Zeros Tattoo",
    "image": "https://zeros-tattoo.ch/og-image.jpg",
    "description": "Boutique tattoo studio in Zürich specializing in minimalistic and fine line tattoos.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Schärenmoosstrasse 80",
      "addressLocality": "Zürich",
      "postalCode": "8052",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.409",
      "longitude": "8.544"
    },
    "url": "https://zeros-tattoo.ch",
    "telephone": "+41123456789",
    "email": "hello@zeros-tattoo.ch",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://instagram.com/zeros_tattoo"
    ]
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export default LocalBusinessSchema;
