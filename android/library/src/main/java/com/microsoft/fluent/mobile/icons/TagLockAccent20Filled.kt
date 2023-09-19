package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TagLockAccent20: ImageVector
  get() {
    if (_tagLockAccent20 != null) {
      return _tagLockAccent20!!
    }
    _tagLockAccent20 = fluentIcon(name = "Filled.TagLockAccent20", 20f) {
      materialPath {
          moveTo(17.506F, 4.034F)
          curveToRelative(0.0F, -0.824F, -0.666F, -1.493F, -1.49F, -1.498F)
          lineToRelative(-4.89F, -0.032F)
          curveToRelative(-0.4F, -0.003F, -0.786F, 0.155F, -1.07F, 0.438F)
          lineToRelative(-6.68F, 6.664F)
          curveToRelative(-0.588F, 0.586F, -0.588F, 1.537F, -0.002F, 2.123F)
          lineToRelative(4.948F, 4.948F)
          curveToRelative(0.454F, 0.454F, 1.126F, 0.556F, 1.678F, 0.308F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, -0.932F, 0.637F, -1.715F, 1.5F, -1.937F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          curveToRelative(0.987F, 0.0F, 1.863F, 0.476F, 2.41F, 1.212F)
          lineToRelative(0.164F, -0.165F)
          curveToRelative(0.282F, -0.282F, 0.44F, -0.665F, 0.44F, -1.063F)
          lineToRelative(-0.008F, -4.95F)
          close()        
      }
    }
    return _tagLockAccent20!!
  }

private var _tagLockAccent20: ImageVector? = null
