import { useEffect, useState } from "react";

type User = {
  id: string,
  username: string,
  email: string,
  avatar: string,
  role: string,
}

export const useUser = () => {
     const [user, setUser] = useState<User>();
      useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await fetch("/api/me", { credentials: "include" });
            if (!res.ok) throw new Error("Failed to fetch user");
            const data = await res.json();
            setUser(data);
          } catch (error) {
            console.error("Error fetching user:", error);
          }
        };
        
        fetchUser();
    }, []);

    return {user}
}