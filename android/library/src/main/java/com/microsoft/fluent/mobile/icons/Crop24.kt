package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Crop24: ImageVector
  get() {
    if (_crop24 != null) {
      return _crop24!!
    }
    _crop24 = fluentIcon(name = "Filled.Crop24", 24f) {
      materialPath {
          moveTo(7.0F, 15.5F)
          curveToRelative(0.0F, 0.78F, 0.595F, 1.42F, 1.355F, 1.493F)
          lineTo(8.5F, 17.0F)
          horizontalLineTo(21.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          curveToRelative(0.0F, 0.513F, -0.386F, 0.936F, -0.883F, 0.993F)
          lineTo(21.0F, 19.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          curveToRelative(-0.513F, 0.0F, -0.936F, -0.386F, -0.993F, -0.883F)
          lineTo(17.0F, 21.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineTo(8.5F)
          curveToRelative(-1.869F, 0.0F, -3.395F, -1.464F, -3.495F, -3.308F)
          lineTo(5.0F, 15.5F)
          verticalLineTo(7.0F)
          horizontalLineTo(3.0F)
          curveTo(2.448F, 7.0F, 2.0F, 6.552F, 2.0F, 6.0F)
          curveToRelative(0.0F, -0.513F, 0.386F, -0.936F, 0.883F, -0.993F)
          lineTo(3.0F, 5.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          curveToRelative(0.513F, 0.0F, 0.936F, 0.386F, 0.993F, 0.883F)
          lineTo(7.0F, 3.0F)
          verticalLineToRelative(12.5F)
          close()
          moveTo(8.0F, 5.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(1.869F, 0.0F, 3.395F, 1.464F, 3.495F, 3.308F)
          lineTo(19.0F, 8.5F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineTo(8.5F)
          curveToRelative(0.0F, -0.78F, -0.595F, -1.42F, -1.355F, -1.493F)
          lineTo(15.5F, 7.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(5.0F)
          close()        
      }
    }
    return _crop24!!
  }

private var _crop24: ImageVector? = null
