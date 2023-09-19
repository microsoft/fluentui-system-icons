package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonSearch20: ImageVector
  get() {
    if (_personSearch20 != null) {
      return _personSearch20!!
    }
    _personSearch20 = fluentIcon(name = "Filled.PersonSearch20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveTo(7.79F, 2.0F, 6.0F, 3.79F, 6.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveToRelative(4.865F, 14.797F)
          curveToRelative(-1.071F, 0.683F, -2.454F, 1.064F, -3.962F, 1.171F)
          curveToRelative(-0.073F, -0.192F, -0.187F, -0.373F, -0.342F, -0.529F)
          lineToRelative(-2.0F, -1.999F)
          curveTo(8.843F, 14.853F, 9.0F, 14.195F, 9.0F, 13.5F)
          curveToRelative(0.0F, -0.925F, -0.28F, -1.785F, -0.758F, -2.5F)
          horizontalLineTo(15.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.896F, 2.0F, 2.0F)
          curveToRelative(0.0F, 1.691F, -0.833F, 2.966F, -2.135F, 3.797F)
          close()
          moveTo(4.5F, 17.0F)
          curveToRelative(0.786F, 0.0F, 1.512F, -0.26F, 2.096F, -0.697F)
          lineToRelative(2.55F, 2.55F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.707F, 0.0F)
          curveToRelative(0.196F, -0.195F, 0.196F, -0.511F, 0.0F, -0.707F)
          lineToRelative(-2.55F, -2.55F)
          curveTo(7.741F, 15.012F, 8.0F, 14.286F, 8.0F, 13.5F)
          curveTo(8.0F, 11.567F, 6.433F, 10.0F, 4.5F, 10.0F)
          reflectiveCurveTo(1.0F, 11.567F, 1.0F, 13.5F)
          reflectiveCurveTo(2.567F, 17.0F, 4.5F, 17.0F)
          close()
          moveToRelative(0.0F, -1.0F)
          curveTo(3.12F, 16.0F, 2.0F, 14.88F, 2.0F, 13.5F)
          reflectiveCurveTo(3.12F, 11.0F, 4.5F, 11.0F)
          reflectiveCurveTo(7.0F, 12.12F, 7.0F, 13.5F)
          reflectiveCurveTo(5.88F, 16.0F, 4.5F, 16.0F)
          close()        
      }
    }
    return _personSearch20!!
  }

private var _personSearch20: ImageVector? = null
