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