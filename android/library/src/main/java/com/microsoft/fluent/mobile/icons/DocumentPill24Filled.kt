package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentPill24: ImageVector
  get() {
    if (_documentPill24 != null) {
      return _documentPill24!!
    }
    _documentPill24 = fluentIcon(name = "Filled.DocumentPill24", 24f) {
      materialPath {
          moveTo(12.0F, 8.0F)
          verticalLineTo(2.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 2.0F, 4.0F, 2.672F, 4.0F, 3.5F)
          verticalLineToRelative(17.0F)
          curveTo(4.0F, 21.328F, 4.672F, 22.0F, 5.5F, 22.0F)
          horizontalLineToRelative(5.967F)
          curveToRelative(0.07F, 0.0F, 0.14F, -0.005F, 0.208F, -0.015F)
          curveToRelative(-0.889F, -1.486F, -0.693F, -3.441F, 0.587F, -4.722F)
          lineToRelative(5.0F, -5.0F)
          curveToRelative(0.756F, -0.756F, 1.747F, -1.134F, 2.738F, -1.134F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          close()
          moveToRelative(1.5F, 0.0F)
          verticalLineTo(2.5F)
          lineToRelative(6.0F, 6.0F)
          horizontalLineTo(14.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          close()
          moveToRelative(8.53F, 4.97F)
          curveToRelative(-1.121F, -1.121F, -2.939F, -1.121F, -4.06F, 0.0F)
          lineToRelative(-5.0F, 5.0F)
          curveToRelative(-1.122F, 1.121F, -1.122F, 2.94F, 0.0F, 4.06F)
          curveToRelative(1.121F, 1.122F, 2.939F, 1.122F, 4.06F, 0.0F)
          lineToRelative(5.0F, -5.0F)
          curveToRelative(1.122F, -1.12F, 1.122F, -2.939F, 0.0F, -4.06F)
          close()
          moveToRelative(-3.0F, 1.06F)
          curveToRelative(0.536F, -0.535F, 1.404F, -0.535F, 1.94F, 0.0F)
          curveToRelative(0.535F, 0.536F, 0.535F, 1.404F, 0.0F, 1.94F)
          lineTo(19.0F, 17.94F)
          lineTo(17.06F, 16.0F)
          lineToRelative(1.97F, -1.97F)
          close()
          moveToRelative(-2.0F, 4.94F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-1.0F, 1.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(1.0F, -1.0F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _documentPill24!!
  }

private var _documentPill24: ImageVector? = null
