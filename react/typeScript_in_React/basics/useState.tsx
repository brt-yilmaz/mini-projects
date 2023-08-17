// @ts-nocheck

// Infer the type as "boolean"
const [enabled, setEnabled] = useState(false);

// Explicitly set the type to "boolean"
const [enabled, setEnabled] = useState<boolean>(false);

// or
type Status = "idle" | "loading" | "success" | "error";

const [status, setStatus] = useState<Status>("idle");

// or 
type RequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success', data: any }
  | { status: 'error', error: Error };

const [requestState, setRequestState] = useState<RequestState>({ status: 'idle' });

// However, many hooks are initialized with null-ish default values, and you may wonder how to provide types. Explicitly declare the type, and use a union type:

const [user, setUser] = useState<User | null>(null);

// later...
setUser(newUser);