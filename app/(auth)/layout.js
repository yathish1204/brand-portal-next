import "../globals.css";
export const metadata={
  title:{
    default:"Trigent - Brand Portal",
    template:"Trigent - %s",
  },
  description:"Trigent Brand Portal is a centralized platform for managing and sharing brand assets, guidelines, and resources. It provides a user-friendly interface for teams to access and utilize brand materials effectively, ensuring consistency and adherence to brand standards across all channels. Like icons, logos, images, and templates are easily accessible, promoting efficient collaboration and brand management.",
}

export default function AuthLayout({children}){
  return(
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}