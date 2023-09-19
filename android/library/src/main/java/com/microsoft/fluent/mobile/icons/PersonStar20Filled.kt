package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonStar20: ImageVector
  get() {
    if (_personStar20 != null) {
      return _personStar20!!
    }
    _personStar20 = fluentIcon(name = "Filled.PersonStar20", 20f) {
      materialPath {
          moveTo(9.0F, 2.0F)
          curveTo(6.79F, 2.0F, 5.0F, 3.79F, 5.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveToRelative(-4.991F, 9.0F)
          curveTo(2.903F, 11.0F, 2.0F, 11.887F, 2.0F, 13.0F)
          curveToRelative(0.0F, 1.691F, 0.833F, 2.966F, 2.135F, 3.797F)
          curveTo(5.417F, 17.614F, 7.145F, 18.0F, 9.0F, 18.0F)
          curveToRelative(0.41F, 0.0F, 0.816F, -0.019F, 1.21F, -0.057F)
          curveTo(9.454F, 17.0F, 9.0F, 15.803F, 9.0F, 14.5F)
          curveToRelative(0.0F, -1.33F, 0.472F, -2.55F, 1.257F, -3.5F)
          horizontalLineTo(4.01F)
          close()
          moveTo(19.0F, 14.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-4.024F, -2.64F)
          curveToRelative(-0.15F, -0.48F, -0.802F, -0.48F, -0.952F, 0.0F)
          lineToRelative(-0.477F, 1.532F)
          horizontalLineTo(12.0F)
          curveToRelative(-0.484F, 0.0F, -0.686F, 0.647F, -0.294F, 0.944F)
          lineToRelative(1.25F, 0.947F)
          lineToRelative(-0.477F, 1.532F)
          curveToRelative(-0.15F, 0.48F, 0.378F, 0.88F, 0.77F, 0.583F)
          lineToRelative(1.25F, -0.947F)
          lineToRelative(1.25F, 0.947F)
          curveToRelative(0.392F, 0.297F, 0.92F, -0.103F, 0.77F, -0.583F)
          lineToRelative(-0.477F, -1.532F)
          lineToRelative(1.25F, -0.947F)
          curveToRelative(0.392F, -0.297F, 0.19F, -0.944F, -0.294F, -0.944F)
          horizontalLineToRelative(-1.545F)
          lineToRelative(-0.478F, -1.531F)
          close()        
      }
    }
    return _personStar20!!
  }

private var _personStar20: ImageVector? = null
