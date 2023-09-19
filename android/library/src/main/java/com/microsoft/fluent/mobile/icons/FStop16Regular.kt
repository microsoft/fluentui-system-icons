package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FStop16: ImageVector
  get() {
    if (_fStop16 != null) {
      return _fStop16!!
    }
    _fStop16 = fluentIcon(name = "Regular.FStop16", 16f) {
      materialPath {
          moveTo(8.844F, 3.845F)
          curveToRelative(0.21F, -1.271F, 1.475F, -2.08F, 2.717F, -1.736F)
          lineToRelative(0.805F, 0.224F)
          curveToRelative(0.266F, 0.073F, 0.542F, -0.083F, 0.616F, -0.349F)
          curveToRelative(0.073F, -0.266F, -0.083F, -0.541F, -0.349F, -0.615F)
          lineToRelative(-0.805F, -0.223F)
          curveToRelative(-1.814F, -0.504F, -3.664F, 0.678F, -3.97F, 2.537F)
          lineTo(7.31F, 7.0F)
          horizontalLineTo(4.5F)
          curveTo(4.224F, 7.0F, 4.0F, 7.224F, 4.0F, 7.5F)
          curveTo(4.0F, 7.777F, 4.224F, 8.0F, 4.5F, 8.0F)
          horizontalLineToRelative(2.646F)
          lineToRelative(-0.524F, 3.183F)
          curveToRelative(-0.244F, 1.479F, -1.879F, 2.27F, -3.19F, 1.543F)
          lineToRelative(-0.69F, -0.383F)
          curveToRelative(-0.241F, -0.134F, -0.546F, -0.047F, -0.68F, 0.194F)
          curveToRelative(-0.133F, 0.242F, -0.046F, 0.546F, 0.195F, 0.68F)
          lineToRelative(0.69F, 0.383F)
          curveToRelative(1.916F, 1.063F, 4.306F, -0.093F, 4.662F, -2.254F)
          lineTo(8.159F, 8.0F)
          horizontalLineTo(10.5F)
          curveTo(10.776F, 8.0F, 11.0F, 7.777F, 11.0F, 7.5F)
          curveTo(11.0F, 7.224F, 10.776F, 7.0F, 10.5F, 7.0F)
          horizontalLineTo(8.324F)
          lineToRelative(0.52F, -3.156F)
          close()        
      }
    }
    return _fStop16!!
  }

private var _fStop16: ImageVector? = null
