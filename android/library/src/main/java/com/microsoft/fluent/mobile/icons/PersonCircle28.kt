package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PersonCircle28: ImageVector
  get() {
    if (_personCircle28 != null) {
      return _personCircle28!!
    }
    _personCircle28 = fluentIcon(name = "Regular.PersonCircle28", 28f) {
      materialPath {
          moveTo(3.5F, 14.0F)
          curveTo(3.5F, 8.201F, 8.201F, 3.5F, 14.0F, 3.5F)
          reflectiveCurveTo(24.5F, 8.201F, 24.5F, 14.0F)
          reflectiveCurveTo(19.799F, 24.5F, 14.0F, 24.5F)
          reflectiveCurveTo(3.5F, 19.799F, 3.5F, 14.0F)
          close()
          moveTo(14.0F, 2.0F)
          curveTo(7.373F, 2.0F, 2.0F, 7.373F, 2.0F, 14.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(20.627F, 2.0F, 14.0F, 2.0F)
          close()
          moveToRelative(3.25F, 7.25F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          reflectiveCurveToRelative(-3.25F, -1.455F, -3.25F, -3.25F)
          reflectiveCurveTo(12.205F, 6.0F, 14.0F, 6.0F)
          reflectiveCurveToRelative(3.25F, 1.455F, 3.25F, 3.25F)
          close()
          moveTo(14.0F, 21.5F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.143F, 6.0F, -5.357F)
          curveTo(20.0F, 14.959F, 19.04F, 14.0F, 17.857F, 14.0F)
          horizontalLineToRelative(-7.714F)
          curveTo(8.959F, 14.0F, 8.0F, 14.96F, 8.0F, 16.143F)
          curveToRelative(0.0F, 3.214F, 2.686F, 5.357F, 6.0F, 5.357F)
          close()        
      }
    }
    return _personCircle28!!
  }

private var _personCircle28: ImageVector? = null
