import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
// import {auth} from '../../../../backend/config/firebase.js'
// import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const Connexion = () => {
  // const handleGoogle = async (e) => {
  //   e.preventDefault(); 
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //   } catch (error) {
  //     console.error("Authentication error:", error);
  //   }
  // };
  

  return (
    <Tabs defaultValue="account" className="max-w-full w-auto md:w-[400px] mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Log In🤞</TabsTrigger>
        <TabsTrigger value="password">Sign Up👋</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Log In </CardTitle>
            <CardDescription>
              🐾 Back for more furry friends? Log in and connect! 🐕❤️
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Input id="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-1">
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Log In</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              🌟 New to Petfy? Sign up to find your paw-fect match! 🐶✨
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Input id="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-1">
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Sign Up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <br />
    {/* <Button className="mr-2" size="lg" boxShadow="lg" onClick={handleGoogle}>
        <FontAwesomeIcon icon={faGoogle} style={{color: "#ff6c02",marginRight: '4px'}} />  Login with Google
    </Button> */}
    </Tabs>
  );
};

export default Connexion;
