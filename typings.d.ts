type Nullable<T> = T | null;
type Optional<T> = T | undefined;

type AnyCallback = (...args: unknown[]) => void;

type UIComponent<T extends object = {}> = React.FunctionComponent<T>

interface UniqEntity {
    code: string
}