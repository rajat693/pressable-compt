'use client';
import { Text, Pressable } from "@gluestack-ui/themed";

export default function Home() {
  return (
    <main>
      <Pressable p="$16" bg="$primary500" $hover-bg="$primary400">
        {({ pressed }) => (
          <Text 
          color={pressed ? "pink" : "yellow"}
          >PRESSABLE</Text>
        )}
      </Pressable>
    </main>
  );
}




// import { Text, Pressable } from "@gluestack-ui/themed";

// export default async function Home() {
//   'use server';
//   return (
//     <main>
//       <Pressable p="$16" bg="$primary500" $hover-bg="$primary400">
//         {({ pressed }) => (
//           <Text 
//           color={pressed ? "pink" : "yellow"}
//           >PRESSABLE</Text>
//         )}
//       </Pressable>
//     </main>
//   );
// }