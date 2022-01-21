export function maskDayMonth(value: string){
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/, "$1/$2");
    
    return value;
}

export function maskHourMinute(value: string){
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/, "$1:$2");
    
    return value;
}