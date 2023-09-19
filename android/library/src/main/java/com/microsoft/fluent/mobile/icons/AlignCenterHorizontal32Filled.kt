package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignCenterHorizontal32: ImageVector
  get() {
    if (_alignCenterHorizontal32 != null) {
      return _alignCenterHorizontal32!!
    }
    _alignCenterHorizontal32 = fluentIcon(name = "Filled.AlignCenterHorizontal32", 32f) {
      materialPath {
          moveTo(30.0F, 16.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-1.933F, 0.0F, -3.5F, -1.567F, -3.5F, -3.5F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineToRelative(-3.0F)
          curveTo(6.567F, 27.0F, 5.0F, 25.433F, 5.0F, 23.5F)
          verticalLineTo(17.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(8.5F)
          curveTo(5.0F, 6.567F, 6.567F, 5.0F, 8.5F, 5.0F)
          horizontalLineToRelative(3.0F)
          curveTo(13.433F, 5.0F, 15.0F, 6.567F, 15.0F, 8.5F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(-3.5F)
          curveTo(17.0F, 9.567F, 18.567F, 8.0F, 20.5F, 8.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, 1.567F, 3.5F, 3.5F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          close()        
      }
    }
    return _alignCenterHorizontal32!!
  }

private var _alignCenterHorizontal32: ImageVector? = null
