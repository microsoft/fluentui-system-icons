package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextBold20: ImageVector
  get() {
    if (_textBold20 != null) {
      return _textBold20!!
    }
    _textBold20 = fluentIcon(name = "Filled.TextBold20", 20f) {
      materialPath {
          moveTo(5.0F, 4.5F)
          curveTo(5.0F, 3.672F, 5.672F, 3.0F, 6.5F, 3.0F)
          horizontalLineToRelative(3.88F)
          curveToRelative(2.364F, 0.0F, 4.12F, 1.934F, 4.12F, 4.12F)
          curveToRelative(0.0F, 0.819F, -0.247F, 1.606F, -0.68F, 2.269F)
          curveToRelative(0.842F, 0.749F, 1.427F, 1.849F, 1.427F, 3.241F)
          curveToRelative(0.0F, 2.775F, -2.318F, 4.37F, -4.367F, 4.37F)
          horizontalLineTo(6.5F)
          curveTo(5.672F, 17.0F, 5.0F, 16.328F, 5.0F, 15.5F)
          verticalLineToRelative(-11.0F)
          close()
          moveTo(8.0F, 6.0F)
          verticalLineToRelative(2.25F)
          horizontalLineToRelative(2.38F)
          curveToRelative(0.625F, 0.0F, 1.12F, -0.516F, 1.12F, -1.13F)
          curveTo(11.5F, 6.514F, 11.012F, 6.0F, 10.38F, 6.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(0.0F, 5.25F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(2.88F)
          curveToRelative(0.691F, 0.0F, 1.367F, -0.537F, 1.367F, -1.37F)
          curveToRelative(0.0F, -0.84F, -0.684F, -1.38F, -1.367F, -1.38F)
          horizontalLineTo(8.0F)
          close()        
      }
    }
    return _textBold20!!
  }

private var _textBold20: ImageVector? = null
