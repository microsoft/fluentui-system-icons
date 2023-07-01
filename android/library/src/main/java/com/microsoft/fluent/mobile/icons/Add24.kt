package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Add24: ImageVector
  get() {
    if (_add24 != null) {
      return _add24!!
    }
    _add24 = fluentIcon(name = "Filled.Add24", 24f) {
      materialPath {
          moveTo(11.883F, 3.007F)
          lineTo(12.0F, 3.0F)
          curveToRelative(0.513F, 0.0F, 0.935F, 0.386F, 0.993F, 0.883F)
          lineTo(13.0F, 4.0F)
          verticalLineToRelative(7.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.513F, 0.0F, 0.936F, 0.386F, 0.993F, 0.883F)
          lineTo(21.0F, 12.0F)
          curveToRelative(0.0F, 0.513F, -0.386F, 0.935F, -0.883F, 0.993F)
          lineTo(20.0F, 13.0F)
          horizontalLineToRelative(-7.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.513F, -0.386F, 0.936F, -0.883F, 0.993F)
          lineTo(12.0F, 21.0F)
          curveToRelative(-0.513F, 0.0F, -0.935F, -0.386F, -0.993F, -0.883F)
          lineTo(11.0F, 20.0F)
          verticalLineToRelative(-7.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.513F, 0.0F, -0.936F, -0.386F, -0.993F, -0.883F)
          lineTo(3.0F, 12.0F)
          curveToRelative(0.0F, -0.513F, 0.386F, -0.935F, 0.883F, -0.993F)
          lineTo(4.0F, 11.0F)
          horizontalLineToRelative(7.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.513F, 0.386F, -0.936F, 0.883F, -0.993F)
          lineTo(12.0F, 3.0F)
          lineToRelative(-0.117F, 0.007F)
          close()        
      }
    }
    return _add24!!
  }

private var _add24: ImageVector? = null
