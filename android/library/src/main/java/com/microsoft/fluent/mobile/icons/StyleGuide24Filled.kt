package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StyleGuide24: ImageVector
  get() {
    if (_styleGuide24 != null) {
      return _styleGuide24!!
    }
    _styleGuide24 = fluentIcon(name = "Filled.StyleGuide24", 24f) {
      materialPath {
          moveTo(17.402F, 4.723F)
          lineToRelative(2.718F, 10.142F)
          curveToRelative(0.393F, 1.467F, -0.478F, 2.975F, -1.945F, 3.368F)
          lineToRelative(-6.278F, 1.682F)
          curveToRelative(-1.467F, 0.393F, -2.975F, -0.477F, -3.368F, -1.944F)
          lineTo(5.81F, 7.828F)
          curveTo(5.418F, 6.361F, 6.289F, 4.853F, 7.756F, 4.46F)
          lineToRelative(6.278F, -1.682F)
          curveToRelative(1.467F, -0.393F, 2.975F, 0.478F, 3.368F, 1.945F)
          close()
          moveToRelative(-6.438F, 3.019F)
          curveToRelative(-0.143F, -0.534F, -0.691F, -0.85F, -1.225F, -0.707F)
          curveToRelative(-0.533F, 0.143F, -0.85F, 0.69F, -0.707F, 1.224F)
          curveToRelative(0.143F, 0.534F, 0.692F, 0.85F, 1.225F, 0.707F)
          curveToRelative(0.534F, -0.143F, 0.85F, -0.69F, 0.707F, -1.224F)
          close()
          moveToRelative(-5.163F, 3.917F)
          lineToRelative(1.762F, 6.57F)
          curveToRelative(0.18F, 0.676F, 0.535F, 1.259F, 1.002F, 1.713F)
          lineTo(8.122F, 19.92F)
          curveToRelative(-1.517F, -0.08F, -2.682F, -1.374F, -2.602F, -2.89F)
          lineToRelative(0.281F, -5.37F)
          close()
          moveTo(4.876F, 10.18F)
          lineToRelative(-0.355F, 6.796F)
          curveToRelative(-0.037F, 0.699F, 0.12F, 1.363F, 0.424F, 1.94F)
          lineToRelative(-0.414F, -0.16F)
          curveToRelative(-1.418F, -0.545F, -2.126F, -2.136F, -1.582F, -3.553F)
          lineToRelative(1.927F, -5.023F)
          close()        
      }
    }
    return _styleGuide24!!
  }

private var _styleGuide24: ImageVector? = null
