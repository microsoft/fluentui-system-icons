package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.KeyboardTab24: ImageVector
  get() {
    if (_keyboardTab24 != null) {
      return _keyboardTab24!!
    }
    _keyboardTab24 = fluentIcon(name = "Filled.KeyboardTab24", 24f) {
      materialPath {
          moveTo(18.207F, 11.293F)
          lineToRelative(-6.5F, -6.5F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.36F, 0.36F, -0.388F, 0.928F, -0.083F, 1.32F)
          lineToRelative(0.083F, 0.094F)
          lineTo(15.086F, 11.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.513F, 0.0F, -0.936F, 0.386F, -0.993F, 0.883F)
          lineTo(3.0F, 12.0F)
          curveToRelative(0.0F, 0.513F, 0.386F, 0.935F, 0.883F, 0.993F)
          lineTo(4.0F, 13.0F)
          horizontalLineToRelative(11.086F)
          lineToRelative(-4.793F, 4.793F)
          curveToRelative(-0.36F, 0.36F, -0.388F, 0.928F, -0.083F, 1.32F)
          lineToRelative(0.083F, 0.094F)
          curveToRelative(0.36F, 0.36F, 0.928F, 0.388F, 1.32F, 0.083F)
          lineToRelative(0.094F, -0.083F)
          lineToRelative(6.5F, -6.5F)
          curveToRelative(0.36F, -0.36F, 0.388F, -0.928F, 0.083F, -1.32F)
          lineToRelative(-0.083F, -0.094F)
          lineToRelative(-6.5F, -6.5F)
          lineToRelative(6.5F, 6.5F)
          close()
          moveTo(21.0F, 18.5F)
          verticalLineToRelative(-13.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          close()        
      }
    }
    return _keyboardTab24!!
  }

private var _keyboardTab24: ImageVector? = null
