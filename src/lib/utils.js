import { default as matter } from 'gray-matter';
import yaml from 'js-yaml';

export default function matter_read(filename) {
    return matter.read(
        filename,
        {
            engines: {
                yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA })
            }
        }
    );
}
