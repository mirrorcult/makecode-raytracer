function vec3_magnitude (list: any[]) {
	
}
function vec3_scalarmult (list: number[], num: number) {
    return num * list[0] + (num * list[1] + num * list[2])
}
function vec3_sub (list: any[], list2: any[]) {
	
}
function vec3_add (list: any[], list2: any[]) {
	
}
function vec3_negate (list: any[]) {
	
}
function vec3_dot (list: any[], list2: any[]) {
	
}
function refract (vec1: any[], vec2: any[]) {
	
}
function vec3_normalize (list: any[]) {
	
}
function vec3 (num: number, num2: number, num3: number) {
    return [num, num2, num3]
}
function set_color_paletted (x: number, y: number, colors: number[]) {
    scene.setBackgroundColor(0)
    palettes = [
    [222, 222, 222],
    [255, 255, 255],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
    ]
    mindist = 9999999
    minindex = 0
    for (let value of palettes) {
        r_dist = value[0] - colors[0]
        b_dist = value[1] - colors[1]
        g_dist = value[2] - colors[2]
        dist = Math.sqrt(r_dist + (b_dist + g_dist))
        if (dist < mindist) {
            mindist = dist
            minindex = palettes.indexOf(value)
        }
    }
    if (minindex == 0) {
        scene.backgroundImage().setPixel(x, y, 0)
    } else if (minindex == 1) {
        scene.backgroundImage().setPixel(x, y, 1)
    } else if (minindex == 2) {
        scene.backgroundImage().setPixel(x, y, 2)
    } else if (minindex == 3) {
        scene.backgroundImage().setPixel(x, y, 3)
    } else if (minindex == 4) {
        scene.backgroundImage().setPixel(x, y, 4)
    } else if (minindex == 5) {
        scene.backgroundImage().setPixel(x, y, 5)
    } else if (minindex == 6) {
        scene.backgroundImage().setPixel(x, y, 6)
    } else if (minindex == 7) {
        scene.backgroundImage().setPixel(x, y, 7)
    } else if (minindex == 8) {
        scene.backgroundImage().setPixel(x, y, 8)
    } else if (minindex == 9) {
        scene.backgroundImage().setPixel(x, y, 9)
    } else if (minindex == 10) {
        scene.backgroundImage().setPixel(x, y, 10)
    } else if (minindex == 11) {
        scene.backgroundImage().setPixel(x, y, 11)
    } else if (minindex == 12) {
        scene.backgroundImage().setPixel(x, y, 12)
    } else if (minindex == 13) {
        scene.backgroundImage().setPixel(x, y, 13)
    } else if (minindex == 14) {
        scene.backgroundImage().setPixel(x, y, 14)
    } else {
        scene.backgroundImage().setPixel(x, y, 15)
    }
}
function reflect (vec1: any[], vec2: any[]) {
	
}
function vec3_cross (list: number[], list2: number[]) {
    a = list[0] * list2[0]
    b = list[1] * list2[1]
    c = list[2] * list2[2]
    return a + (b + c)
}
let c = 0
let b = 0
let a = 0
let dist = 0
let g_dist = 0
let b_dist = 0
let r_dist = 0
let minindex = 0
let mindist = 0
let palettes: number[][] = []
for (let t = 0; t <= 100; t++) {
    set_color_paletted(t, t, vec3(120, 120, 120))
}
