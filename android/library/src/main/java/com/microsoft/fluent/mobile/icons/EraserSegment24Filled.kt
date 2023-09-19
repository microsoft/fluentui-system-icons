package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EraserSegment24: ImageVector
  get() {
    if (_eraserSegment24 != null) {
      return _eraserSegment24!!
    }
    _eraserSegment24 = fluentIcon(name = "Filled.EraserSegment24", 24f) {
      materialPath {
          moveTo(12.651F, 2.638F)
          curveToRelative(0.886F, -0.878F, 2.317F, -0.867F, 3.19F, 0.023F)
          lineToRelative(4.91F, 5.008F)
          curveToRelative(0.861F, 0.878F, 0.858F, 2.285F, -0.007F, 3.158F)
          lineTo(12.16F, 19.5F)
          horizontalLineToRelative(3.954F)
          curveToRelative(0.318F, -1.015F, 1.266F, -1.75F, 2.385F, -1.75F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.119F, 2.5F, 2.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          curveToRelative(-1.12F, 0.0F, -2.067F, -0.736F, -2.386F, -1.75F)
          horizontalLineTo(9.848F)
          curveToRelative(-0.606F, 0.03F, -1.222F, -0.184F, -1.69F, -0.642F)
          lineTo(3.06F, 15.35F)
          curveToRelative(-0.896F, -0.879F, -0.899F, -2.32F, -0.007F, -3.204F)
          lineToRelative(9.598F, -9.508F)
          close()
          moveTo(9.801F, 19.5F)
          curveToRelative(0.17F, -0.015F, 0.337F, -0.089F, 0.467F, -0.22F)
          lineToRelative(1.468F, -1.483F)
          lineToRelative(-6.099F, -6.1F)
          lineToRelative(-1.529F, 1.515F)
          curveToRelative(-0.297F, 0.294F, -0.296F, 0.775F, 0.003F, 1.068F)
          lineToRelative(5.099F, 5.008F)
          curveToRelative(0.15F, 0.147F, 0.345F, 0.218F, 0.54F, 0.214F)
          verticalLineTo(19.5F)
          horizontalLineTo(9.8F)
          close()        
      }
    }
    return _eraserSegment24!!
  }

private var _eraserSegment24: ImageVector? = null
