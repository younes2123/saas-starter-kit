import { AuthenticationError, NotFoundError } from "@/app/util";
import { UserSession } from "@/use-cases/types";

export async function assertUserExists(user: UserSession | undefined) {
  if (!user) {
    throw new NotFoundError("User not found");
  }
  return user;
}
