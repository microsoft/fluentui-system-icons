package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonPill20: ImageVector
  get() {
    if (_personPill20 != null) {
      return _personPill20!!
    }
    _personPill20 = fluentIcon(name = "Filled.PersonPill20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveTo(7.79F, 2.0F, 6.0F, 3.79F, 6.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveToRelative(2.879F, 9.0F)
          lineToRelative(-2.94F, 2.94F)
          curveToRelative(-1.09F, 1.09F, -1.34F, 2.705F, -0.748F, 4.035F)
          curveToRelative(-1.544F, -0.098F, -2.962F, -0.481F, -4.056F, -1.178F)
          curveTo(3.833F, 15.967F, 3.0F, 14.69F, 3.0F, 13.0F)
          curveToRelative(0.0F, -1.113F, 0.903F, -2.0F, 2.009F, -2.0F)
          horizontalLineToRelative(7.87F)
          close()
          moveToRelative(5.475F, -0.353F)
          curveToRelative(-1.024F, -1.024F, -2.684F, -1.024F, -3.708F, 0.0F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-1.023F, 1.023F, -1.023F, 2.683F, 0.0F, 3.707F)
          curveToRelative(1.024F, 1.024F, 2.684F, 1.024F, 3.707F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(1.024F, -1.024F, 1.024F, -2.684F, 0.0F, -3.707F)
          close()
          moveToRelative(-3.0F, 0.707F)
          curveToRelative(0.633F, -0.633F, 1.66F, -0.633F, 2.292F, 0.0F)
          curveToRelative(0.634F, 0.633F, 0.634F, 1.66F, 0.0F, 2.293F)
          lineTo(16.0F, 15.293F)
          lineTo(13.707F, 13.0F)
          lineToRelative(1.646F, -1.646F)
          close()
          moveToRelative(-1.5F, 4.292F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-1.0F, 1.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(1.0F, -1.0F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()        
      }
    }
    return _personPill20!!
  }

private var _personPill20: ImageVector? = null
