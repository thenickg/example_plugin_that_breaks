export default function (kibana) {
    return new kibana.Plugin({
		
        config(Joi) {
            const { array, boolean, number, object, string, ref } = Joi;

            return object({
                myserver: string().default("localhost"),
                myport: number().default(1337),
            }).default();
        },
		
	});
};