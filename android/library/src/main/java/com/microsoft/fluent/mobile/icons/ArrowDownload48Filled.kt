package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDownload48: ImageVector
  get() {
    if (_arrowDownload48 != null) {
      return _arrowDownload48!!
    }
    _arrowDownload48 = fluentIcon(name = "Filled.ArrowDownload48", 48f) {
      materialPath {
          moveTo(12.25F, 38.5F)
          horizontalLineToRelative(23.5F)
          curveToRelative(0.967F, 0.0F, 1.75F, 0.783F, 1.75F, 1.75F)
          curveToRelative(0.0F, 0.918F, -0.707F, 1.671F, -1.606F, 1.744F)
          lineTo(35.75F, 42.0F)
          horizontalLineToRelative(-23.5F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.783F, -1.75F, -1.75F)
          curveToRelative(0.0F, -0.918F, 0.707F, -1.671F, 1.607F, -1.744F)
          lineTo(12.25F, 38.5F)
          horizontalLineToRelative(23.5F)
          close()
          moveTo(23.607F, 6.256F)
          lineTo(23.75F, 6.25F)
          curveToRelative(0.918F, 0.0F, 1.671F, 0.707F, 1.744F, 1.606F)
          lineTo(25.5F, 8.0F)
          verticalLineToRelative(21.333F)
          lineToRelative(4.793F, -4.792F)
          curveToRelative(0.684F, -0.684F, 1.792F, -0.684F, 2.475F, 0.0F)
          curveToRelative(0.683F, 0.683F, 0.683F, 1.791F, 0.0F, 2.475F)
          lineToRelative(-7.778F, 7.778F)
          curveToRelative(-0.684F, 0.683F, -1.792F, 0.683F, -2.475F, 0.0F)
          lineToRelative(-7.778F, -7.778F)
          curveToRelative(-0.684F, -0.684F, -0.684F, -1.792F, 0.0F, -2.475F)
          curveToRelative(0.683F, -0.684F, 1.791F, -0.684F, 2.475F, 0.0F)
          lineTo(22.0F, 29.329F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -0.918F, 0.707F, -1.671F, 1.607F, -1.744F)
          lineTo(23.75F, 6.25F)
          lineToRelative(-0.143F, 0.006F)
          close()        
      }
    }
    return _arrowDownload48!!
  }

private var _arrowDownload48: ImageVector? = null
