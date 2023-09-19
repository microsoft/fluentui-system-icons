package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PenOff16: ImageVector
  get() {
    if (_penOff16 != null) {
      return _penOff16!!
    }
    _penOff16 = fluentIcon(name = "Filled.PenOff16", 16f) {
      materialPath {
          moveTo(9.0F, 9.707F)
          lineToRelative(5.146F, 5.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(6.293F, 7.0F)
          lineTo(3.338F, 9.955F)
          curveToRelative(-0.18F, 0.18F, -0.317F, 0.401F, -0.398F, 0.644F)
          lineToRelative(-0.914F, 2.743F)
          curveToRelative(-0.06F, 0.18F, -0.013F, 0.378F, 0.12F, 0.512F)
          curveToRelative(0.134F, 0.134F, 0.333F, 0.18F, 0.512F, 0.12F)
          lineToRelative(2.743F, -0.914F)
          curveToRelative(0.243F, -0.08F, 0.463F, -0.217F, 0.644F, -0.398F)
          lineTo(9.0F, 9.707F)
          close()
          moveToRelative(3.263F, -1.677F)
          lineToRelative(-1.056F, 1.056F)
          lineToRelative(0.707F, 0.707F)
          lineToRelative(1.056F, -1.056F)
          curveToRelative(0.683F, -0.683F, 0.683F, -1.791F, 0.0F, -2.474F)
          lineTo(12.707F, 6.0F)
          lineToRelative(0.733F, -0.732F)
          curveToRelative(0.748F, -0.748F, 0.748F, -1.96F, 0.0F, -2.707F)
          curveToRelative(-0.747F, -0.748F, -1.96F, -0.748F, -2.707F, 0.0F)
          lineTo(7.707F, 5.585F)
          lineToRelative(2.707F, 2.707F)
          lineTo(12.0F, 6.707F)
          lineToRelative(0.263F, 0.263F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          close()        
      }
    }
    return _penOff16!!
  }

private var _penOff16: ImageVector? = null
