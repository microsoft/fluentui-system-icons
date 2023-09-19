package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clover32: ImageVector
  get() {
    if (_clover32 != null) {
      return _clover32!!
    }
    _clover32 = fluentIcon(name = "Filled.Clover32", 32f) {
      materialPath {
          moveTo(8.5F, 2.0F)
          curveTo(4.91F, 2.0F, 2.0F, 4.91F, 2.0F, 8.5F)
          reflectiveCurveTo(4.91F, 15.0F, 8.5F, 15.0F)
          horizontalLineTo(14.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(8.5F)
          curveTo(15.0F, 4.91F, 12.09F, 2.0F, 8.5F, 2.0F)
          close()
          moveToRelative(0.0F, 28.0F)
          curveTo(4.91F, 30.0F, 2.0F, 27.09F, 2.0F, 23.5F)
          reflectiveCurveTo(4.91F, 17.0F, 8.5F, 17.0F)
          horizontalLineTo(14.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 3.59F, -2.91F, 6.5F, -6.5F, 6.5F)
          close()
          moveToRelative(15.0F, -28.0F)
          curveTo(27.09F, 2.0F, 30.0F, 4.91F, 30.0F, 8.5F)
          reflectiveCurveTo(27.09F, 15.0F, 23.5F, 15.0F)
          horizontalLineTo(18.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(8.5F)
          curveTo(17.0F, 4.91F, 19.91F, 2.0F, 23.5F, 2.0F)
          close()
          moveToRelative(0.0F, 28.0F)
          curveToRelative(3.59F, 0.0F, 6.5F, -2.91F, 6.5F, -6.5F)
          reflectiveCurveTo(27.09F, 17.0F, 23.5F, 17.0F)
          horizontalLineTo(18.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 3.59F, 2.91F, 6.5F, 6.5F, 6.5F)
          close()        
      }
    }
    return _clover32!!
  }

private var _clover32: ImageVector? = null
